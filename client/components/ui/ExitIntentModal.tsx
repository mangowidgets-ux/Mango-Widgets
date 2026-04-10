import { useEffect, useState, useRef } from "react";
import { X, MessageCircle, ArrowRight } from "lucide-react";

export const ExitIntentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const hasBeenShownRef = useRef(false);
  const inactivityTimeout = 30000; // 30 seconds

  useEffect(() => {
    let inactivityTimer: NodeJS.Timeout;
    let lastActivityTime = Date.now();

    // Track user inactivity
    const resetInactivityTimer = () => {
      lastActivityTime = Date.now();
      clearTimeout(inactivityTimer);

      inactivityTimer = setTimeout(() => {
        if (!hasBeenShownRef.current) {
          setIsOpen(true);
          hasBeenShownRef.current = true;
        }
      }, inactivityTimeout);
    };

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Exit intent: if mouse is at the very top of the page
      if (e.clientY < 10 && !hasBeenShownRef.current) {
        setIsOpen(true);
        hasBeenShownRef.current = true;
      }
      resetInactivityTimer();
    };

    // Track keyboard activity
    const handleKeyPress = () => {
      resetInactivityTimer();
    };

    // Track scroll activity
    const handleScroll = () => {
      resetInactivityTimer();
    };

    // Initialize the timer
    inactivityTimer = setTimeout(() => {
      if (!hasBeenShownRef.current) {
        setIsOpen(true);
        hasBeenShownRef.current = true;
      }
    }, inactivityTimeout);

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keypress", handleKeyPress);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("click", resetInactivityTimer);

    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keypress", handleKeyPress);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", resetInactivityTimer);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xlgoknjz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          source: 'Exit Intent Modal'
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        
        // Close modal after 2 seconds
        setTimeout(() => {
          setIsOpen(false);
          setName("");
          setEmail("");
          setSubmitted(false);
        }, 2000);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error submitting form. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-zinc-950 rounded-2xl shadow-2xl p-8">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-300 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Circle */}
          <div className="flex justify-center mb-6">
            {/* <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div> */}
            <img src="images/logo-bg.png" alt="logo"/>
          </div>

          {/* Content */}
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Wait! Get a free consultation
                </h3>
                <p className="text-gray-400 text-sm">
                  Before you go, let us help you with your project. Get a free
                  30-minute strategy session with our team.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-white text-zinc-950 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              {/* Footer Text */}
              <p className="text-center text-xs text-gray-600">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
              <p className="text-gray-400 text-sm">
                We'll reach out within 24 hours with your consultation details.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

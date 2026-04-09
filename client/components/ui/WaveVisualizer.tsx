export const WaveVisualizer = () => {
  const barGroups = [
    { color: "#0ea5e9", count: 12 },
    { color: "#0284c7", count: 12 },
    { color: "#4d65ff", count: 12 },
    { color: "#6366f1", count: 12 },
    { color: "#8b5cf6", count: 12 },
  ];

  const getDelayClass = (index: number) => {
    const delays = [
      "wave-bar-delay-1",
      "wave-bar-delay-2",
      "wave-bar-delay-3",
      "wave-bar-delay-4",
      "wave-bar-delay-5",
      "wave-bar-delay-6",
      "wave-bar-delay-7",
      "wave-bar-delay-8",
      "wave-bar-delay-9",
      "wave-bar-delay-10",
      "wave-bar-delay-11",
      "wave-bar-delay-12",
      "wave-bar-delay-13",
      "wave-bar-delay-14",
      "wave-bar-delay-15",
      "wave-bar-delay-16",
      "wave-bar-delay-17",
      "wave-bar-delay-18",
      "wave-bar-delay-19",
      "wave-bar-delay-20",
    ];
    return delays[index % delays.length];
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-2xl h-40 relative">
        <svg
          className="h-full w-full"
          viewBox="0 0 660 180"
          preserveAspectRatio="xMidYMid meet"
          style={{
            height: "100%",
            overflow: "hidden",
            verticalAlign: "middle",
            width: "100%",
          }}
        >
          {/* Background bars (static) */}
          {Array.from({ length: 132 }).map((_, i) => (
            <rect
              key={`bg-${i}`}
              x={i * 11}
              y="10"
              width="5"
              height="160"
              fill="#e4e4e7"
              rx="2"
              opacity="1"
            />
          ))}

          {/* Animated gradient bars with wave effect */}
          {barGroups.map((group, groupIndex) =>
            Array.from({ length: group.count }).map((_, barIndex) => {
              const absoluteIndex = groupIndex * group.count + barIndex;
              return (
                <rect
                  key={`${group.color}-${barIndex}`}
                  x={absoluteIndex * 11}
                  y="10"
                  width="5"
                  height="160"
                  fill={group.color}
                  rx="2"
                  className={`wave-bar ${getDelayClass(barIndex)}`}
                />
              );
            })
          )}
        </svg>
      </div>
    </div>
  );
};

import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({deadline}) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center gap-8 lg:gap-16 py-8 xl:py-12 font-[Neuething]">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value], index) => (
                <div key={label} className="text-center relative">
                    <p className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <span className="text-xs 2xl:text-lg font-medium">{label}</span>
                    {index !== 0 && (
                        <div className="absolute w-px h-[22px] -left-4 lg:-left-8 top-6 bg-black/[.1]"></div>
                    )}
                </div>
            ))}
        </div>
    );
};
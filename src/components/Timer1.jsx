import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer1 = ({ deadline }) => {
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
        <div className="flex justify-evenly items-center bg-black rounded-full md:min-w-[312px] h-[62px] max-[700px]:mt-8">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value], index) => (
                <div key={label} className="text-center">
                    <p className="font-['Neuething] text-3xl font-semibold text-white">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    <p className="font-['Neuething] text-[6px] font-medium text-white">{label}</p>
                </div>
            ))}
        </div>
    );
};
import React, { useState, useEffect } from 'react';

const TypeWritter = () => {
    const texts = ["hello..!", "you can add employee..", "And UpDate Info.. ","And remove employee.. ","By React JS CRUD Operation.."];
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 150); // تأخير 200 ملي ثانية لكل حرف

            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                setDisplayedText(''); // امسح النص
                setCharIndex(0);   // أعد فهرس الأحرف إلى 0
                setTextIndex((prev) => (prev + 1) % texts.length); // إنتقل إلى النص التالي
            }, 1500); // تأخير 1500 ملي ثانية قبل الانتقال للنص التالي

            return () => clearTimeout(timer);
        }
    }, [charIndex, textIndex, texts]);

    return (
        <div>
            <h1>{displayedText}</h1>
        </div>
    );
};

export default TypeWritter;

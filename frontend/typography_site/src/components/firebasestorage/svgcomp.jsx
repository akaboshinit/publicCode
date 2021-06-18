import React, { memo, useEffect } from 'react';
import firebaseUtil from '../firebase';

export default memo(({ text, path }) => {
    useEffect(() => {
        if (process.browser) {
            const svgData = document.getElementById('__twitter_card');
            firebaseUtil.uploadOgpFile(path, text, svgData);
        }
    }, []);
    const text1 = text.slice(0, 20);
    const text2 = text.slice(20, 40);
    return (
        <svg id="__twitter_card" style={{ display: 'none' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="1200" height="630" viewBox="0 0 1200 630">
        <defs>
            <clipPath id="clip-twitter_card">
            <rect width="1200" height="630"/>
            </clipPath>
        </defs>
        <g id="twitter_card" data-name="twitter card" clipPath="url(#clip-twitter_card)">
            <rect width="1200" height="628" fill="#fff"/>
            <g id="グループ_4" data-name="グループ 4">
            <text transform="translate(600 261)" stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="52" fontFamily="HiraMinProN-W6, Hiragino Mincho ProN" letterSpacing="0.05em" textAnchor="middle" dominantBaseline="central">{text1}</text>
            <text transform="translate(600 334)" stroke="rgba(0,0,0,0)" strokeWidth="1" fontSize="52" fontFamily="HiraMinProN-W6, Hiragino Mincho ProN" letterSpacing="0.05em" textAnchor="middle" dominantBaseline="central">{text2}</text>
            </g>
        </g>
        </svg>
    );
});
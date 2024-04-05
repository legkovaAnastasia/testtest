import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconIdType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props: IconIdType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width || "50"} height={props.height || "50"} fill="none" viewBox={props.viewBox || "0 0 24 24"}>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};


    
    import styles from './Avatar.module.css';
    import { ImgHTMLAttributes } from 'react';

    interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
        isProfilePictureWithBorder?: boolean;
    }

    export function Avatar({isProfilePictureWithBorder = false, ...props}: AvatarProps){
        return(
            <img 
            className={ isProfilePictureWithBorder ? styles.avatarWithBorder : styles.avatar } 
            {...props}
            />
            
        )
    }
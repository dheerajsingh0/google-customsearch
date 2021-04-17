const Avatar = ({url,className}) => {
    return (
        <img  loading="lazy" 
        className={`h-8  rounded-full  cursor-pointer transition duration-150 transform hover:scale-110 animate-bounce  ${className}`}
         src={url} alt="profile picture"/>
    )
}

export default Avatar

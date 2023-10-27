const ProjectIcons = ({ isSelected = false }: { isSelected: boolean }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isSelected ? 'red' : 'none'} xmlns="http://www.w3.org/2000/svg" >
            <g opacity="0.9">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill="#A8B0B9" />
            </g>
        </svg >

    )
}

export default ProjectIcons;

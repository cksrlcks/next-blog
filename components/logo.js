import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.31 17.11" height="1.8">
            <g>
                <g>
                    <path d="M10.8.4V13.22H9.12V7.43H1.68v5.79H0V.4H1.68V5.89H9.12V.4Z" />
                    <path d="M12.35,8.64a4.59,4.59,0,1,1,9.17,0,5.31,5.31,0,0,1,0,.68H14A2.92,2.92,0,0,0,17,12.05a2.72,2.72,0,0,0,2.56-1.33h1.68A4.25,4.25,0,0,1,17,13.45,4.56,4.56,0,0,1,12.35,8.64ZM17,5.23A2.91,2.91,0,0,0,14,8h5.91A2.92,2.92,0,0,0,17,5.23Z" />
                    <path d="M22.5,8.64A4.56,4.56,0,0,1,27,3.84a3.67,3.67,0,0,1,3.24,1.59V4.07h1.65v9.15H30.27V11.86A3.67,3.67,0,0,1,27,13.45,4.56,4.56,0,0,1,22.5,8.64Zm7.81,0A3.13,3.13,0,0,0,27.17,5.3a3.08,3.08,0,0,0-3.06,3.34A3.09,3.09,0,0,0,27.17,12,3.14,3.14,0,0,0,30.31,8.64Z" />
                    <path d="M42.44,4.07l-3.88,9.15H36.82L33,4.07h1.79l3,7.28,3-7.28Z" />
                    <path d="M52.18,4.07l-5.72,13H44.8L46.61,13l-3.92-9H44.5l2.94,7.2,3-7.2Z" />
                    <path d="M54.83,11.86v1.36H53.18V0h1.65V5.43a3.7,3.7,0,0,1,3.25-1.59,4.57,4.57,0,0,1,4.53,4.8,4.57,4.57,0,0,1-4.53,4.81A3.7,3.7,0,0,1,54.83,11.86ZM61,8.64A3.08,3.08,0,0,0,57.94,5.3,3.13,3.13,0,0,0,54.8,8.64,3.14,3.14,0,0,0,57.94,12,3.08,3.08,0,0,0,61,8.64Z" />
                    <path d="M63.6,8.64a4.59,4.59,0,1,1,9.17,0,5.31,5.31,0,0,1,0,.68H65.25a2.91,2.91,0,0,0,2.94,2.73,2.7,2.7,0,0,0,2.56-1.33h1.68a4.24,4.24,0,0,1-4.24,2.73A4.56,4.56,0,0,1,63.6,8.64Zm4.59-3.41A2.89,2.89,0,0,0,65.25,8h5.9A2.91,2.91,0,0,0,68.19,5.23Z" />
                    <path d="M73.74,8.64a4.57,4.57,0,0,1,4.53-4.8,3.68,3.68,0,0,1,3.25,1.59V4.07h1.65v9.15H81.52V11.86a3.68,3.68,0,0,1-3.25,1.59A4.57,4.57,0,0,1,73.74,8.64Zm7.81,0A3.13,3.13,0,0,0,78.42,5.3a3.08,3.08,0,0,0-3.06,3.34A3.09,3.09,0,0,0,78.42,12,3.14,3.14,0,0,0,81.55,8.64Z" />
                    <path d="M86.77,4.07v1.4a3.78,3.78,0,0,1,3.3-1.63A3.69,3.69,0,0,1,91.31,4V5.57A3.26,3.26,0,0,0,90,5.31a3.16,3.16,0,0,0-3.18,3.17v4.74H85.12V4.07Z" />
                </g>
            </g>
        </LogoSvg>
    )
}

export default Logo;

const LogoSvg = styled.svg`
    fill:#444;
    height:1.8em;
    @media (max-width: 968px) {
        height:1.6em;
    }
    
    @media (max-width: 768px) {
        height:1.4em;
    }
`
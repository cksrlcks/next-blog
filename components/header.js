import ActiveLink from './activeLink';
import Link from 'next/link'
import styled from 'styled-components';
import Logo from '../components/logo';

const Nav = () => {
    return (
        <Header>
            <div className="global-inner">
                <h1 className="logo"><Link href="/"><a><Logo className="logo" /></a></Link></h1>
                <nav className="gnb">
                    <ActiveLink href="/blog" activeClassName='active'><a>블로그</a></ActiveLink>
                    <ActiveLink href="/study" activeClassName='active'><a>공부</a></ActiveLink>
                    <ActiveLink href="/work" activeClassName='active'><a>작업</a></ActiveLink>
                </nav>
                <WritePost>Write</WritePost>
            </div>
        </Header>
    )
}

export default Nav;

const Header = styled.header`
    background:#fff;
    border-bottom:1px solid #eee;
    font-size:1.14em;
    .global-inner{
        display:flex;
        justify-content:space-between;
        align-item:center;
        padding:2em 0 1.8em;
        transition:all 0.2s ease;

        @media (max-width: 968px) {
            padding:1.8em 1em 1.6em;
        }
        @media (max-width: 768px) {
            padding:1.6em 1em 1.4em;
        }

        nav{
            line-height:1.8em;
            display:flex;
            align-item:center;
            a{
                display:block;
                margin-left:2em;
                color:#8794A3;
                transition: color 0.2s;
                &:hover{
                    
                    color:#435061
                }
                &.active{
                    color:rgb(34, 184, 207);
                }
                @media (max-width: 768px){
                    font-size:0.95em;
                }
            }
            
        }
    }
`

const WritePost = styled.button`
    box-sizing:border-box;
    height: 2.5em;
    display:inline-block;
    padding:0 0.875em;
    border: 0.0625em solid #0baa75;
    border-radius: 0.125em;
    background-image: linear-gradient(0deg,#0eb87f,#14d997);
    background-size: 100% 200%;
    font-size:0.875em;
    color:#fff;
    overflow:hidden;
    vertical-align:middle;
    display:none;

    
`
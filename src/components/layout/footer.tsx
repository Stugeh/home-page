import EmailIcon from '@mui/icons-material/EmailRounded';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Footer() {
  const { data: sessionData } = useSession();
  return (
    <footer className="footer">
      <div className='links'>
        <a href="https://github.com/Stugeh">
          <GithubIcon/>
        </a>
        <a href="https://www.linkedin.com/in/tuukkav/">
          <LinkedInIcon/>
        </a>
        <a href = "mailto: tuukkaveteli@gmail.com">
          <EmailIcon />
        </a>
      </div>
      <div>
        <span onClick={sessionData ? () => signOut() : () => signIn()}>
            &#169;
        </span> 
        Tuukka Veteli
      </div>
    </footer>
  );
}
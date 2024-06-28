import CoverImage from '../../components/cover-image';
import Dropdown from '../../components/dropdown';
import BackgroundImage from '../../assets/image2.png';
import Info from '../../assets/infos.json';
import './index.scss';

function About() {
  return (
    <main>
      <div className="about">
        <div className="about-cover">
          <CoverImage image={BackgroundImage} />
        </div>
        <div className="dropdown-menus">
          {Info.map((profile, index) => (
            <Dropdown
              key={`${profile}-${index}`}
              title={profile.title}
              text={profile.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default About;

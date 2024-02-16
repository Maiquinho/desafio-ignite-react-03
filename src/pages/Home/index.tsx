import {
  HomeWrapper,
  ProfileAvatar,
  ProfileHeading,
  ProfileInfo,
  ProfileWrapper,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function Home() {
  return (
    <HomeWrapper>
      <ProfileWrapper>
        <ProfileAvatar
          src="https://github.com/maiquinho.png"
          alt="avatar do perfil: Maiquinho"
        />
        <ProfileInfo>
          <ProfileHeading>
            <h1>Michael Matheus</h1>
            <a
              href="https://github.com/maiquinho"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
            </a>
          </ProfileHeading>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <footer>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} fontSize={18} />
                Maiquinho
              </li>
              <li>
                <FontAwesomeIcon icon={faBuilding} fontSize={18} />
                Publinet1
              </li>
              <li>
                <FontAwesomeIcon icon={faUserGroup} fontSize={18} />
                11 seguidores
              </li>
            </ul>
          </footer>
        </ProfileInfo>
      </ProfileWrapper>
    </HomeWrapper>
  )
}

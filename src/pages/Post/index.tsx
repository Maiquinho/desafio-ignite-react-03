import { NavLink } from 'react-router-dom'
import {
  PostWrapper,
  PostInfoWrapper,
  PostInfoBreadcrumb,
  PostInfoHeading,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faArrowUpRightFromSquare,
  faCalendar,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Post() {
  return (
    <PostWrapper>
      <PostInfoWrapper>
        <PostInfoHeading>
          <PostInfoBreadcrumb>
            <NavLink to="/">
              <FontAwesomeIcon icon={faAngleLeft} fontSize={12} />
              Voltar
            </NavLink>
            <NavLink
              to="https://github.com/maiquinho/desafio-ignite-react-03/issues"
              target="_blank"
            >
              Ver no Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
            </NavLink>
          </PostInfoBreadcrumb>
          <h1>JavaScript data types and data structures</h1>
          <footer>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} fontSize={18} />
                Maiquinho
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} fontSize={18} />
                Há 1 dia
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} fontSize={18} />5 comentários
              </li>
            </ul>
          </footer>
        </PostInfoHeading>
      </PostInfoWrapper>
    </PostWrapper>
  )
}

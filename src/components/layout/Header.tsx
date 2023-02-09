import { Link } from "react-router-dom";
import Container from "../common/Container";
import Text from "../common/Text";

/**
 * Main page의 header Nav tag
 * @returns Header Nav Component(Logo & Menu)
 */
const Header = () => {
  return (
    <nav className="z-10 relative h-10">
      <Container
        justifyContent="between"
        className="fixed w-full p-2 py-2 bg-white border-b"
      >
        <Container>
          <Text bold mono>
            JUICE
          </Text>
          <Text mono gray>
            Planner
          </Text>
        </Container>

        <Container className="gap-8">
          <Link to="/juiceplan/diary">
            <Text bold mono pointer className="hover:underline">
              Diary
            </Text>
          </Link>
          <Text bold mono pointer className="underline hover:underline">
            Profile
          </Text>
        </Container>
      </Container>
    </nav>
  );
};

export default Header;

import Container from "../common/Container";
import Text from "../common/Text";
import GithubSvg from "./GithubSvg";
import VelogSvg from "./VelogSvg";

/**
 * Main Page에 들어가는 Component
 * @returns Profile, Circle 과 각종 정보(이름, 블로그, 깃허브)를 띄운다.
 */
const Profile = () => {
  // href 을 통해서 새로운 탭으로 링크를 띄운다.
  const hrefLink = (link: string) => {
    return window.open(link, "_blank");
  };
  return (
    <Container alignItems="center" className="gap-2">
      <div className="rounded-full bg-slate-300 w-16 h-16 shadow-lg" />

      <Container direction="col" className="gap-2">
        <Text bold mono>
          @1_ju1.ce
        </Text>

        <Container className="gap-1">
          <VelogSvg w={20} h={20} className="opacity-30" />
          <Text
            gray
            size="sm"
            pointer
            onClick={() => hrefLink("https://velog.io/@onejuice98")}
          >
            @onejuice98
          </Text>
        </Container>
        <Container className="gap-1">
          <GithubSvg w={20} h={20} className="opacity-30" />
          <Text
            gray
            size="sm"
            pointer
            onClick={() => hrefLink("https://github.com/onejuice98")}
          >
            onejuice98
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Profile;

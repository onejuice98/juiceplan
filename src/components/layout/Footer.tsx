import Container from "../common/Container";
import Text from "../common/Text";
import MailSvg from "./MailSvg";

/**
 * Main Page footer, 메일을 포함한다.
 * @returns footer componenet, 메일과 정보를 포함
 */
const Footer = () => {
  return (
    <footer className="relative w-full h-12 bottom-0 left-0 bg-white dark:bg-gray-900">
      <div className="px-4 py-6 bg-gray-100/[0.6] dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <Text gray size="sm">
          © Juice. All Rights Reserved.
        </Text>
        <Container alignItems="center" className="gap-2">
          <MailSvg w={16} h={16} className="opacity-30" />
          <Text gray size="sm">
            waterpurifier@khu.ac.kr
          </Text>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

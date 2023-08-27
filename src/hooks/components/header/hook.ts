import { graphql, useStaticQuery } from 'gatsby';
import { HeaderData } from '@/types/hook';

export default function useHeaderDetail() {
  const data: HeaderData = useStaticQuery(graphql`
    query {
      logo: allFile(filter: { sourceInstanceName: { eq: "logo" } }) {
        nodes {
          publicURL
          name
        }
      }
      social: allFile(
        filter: { sourceInstanceName: { eq: "social" } }
        sort: { name: ASC }
      ) {
        nodes {
          publicURL
          name
        }
      }
      tooltip: allFile(
        filter: { dir: { regex: "/images/" }, name: { eq: "tooltip" } }
      ) {
        nodes {
          publicURL
          name
        }
      }
    }
  `);
  const link = [
    'https://www.youtube.com/user/yourssu',
    'https://www.notion.so/yourssu/YOURSSU-Blog-8e064a720d1942d68aa42093b7d2f5b6',
    'https://brunch.co.kr/@yourssu-design',
    'https://www.instagram.com/yourssu_official/',
  ];
  return { data, link };
}

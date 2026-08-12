import { Title } from "../Title/Title";

type FeatureListProps = {
  title: string;
  items: string[];
};  

export const FeatureList = ({ title, items }: FeatureListProps) => (
  <section>
    <Title as="h2">{title}</Title> 
    <ul>
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
  </section>
)
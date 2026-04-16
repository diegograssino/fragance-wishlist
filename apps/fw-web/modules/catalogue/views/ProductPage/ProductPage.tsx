import { Button, Container, Typography } from "@repo/ui";
import Image from "next/image";
import Link from "next/link";
import { ProductPageProps } from "../../types/views";

const ProductPage = ({ product }: ProductPageProps) => {
  const { name, brand, releaseYear, rating, imageUrl } = product;

  return (
    <Container as="main">
      <div className="flex flex-col gap-2">
        <Button as={Link} href="/catalogue" variant="ghost" className="w-fit">
          Back to Catalogue
        </Button>
        <Button as={Link} href="/" variant="ghost" className="w-fit">
          Back to Home
        </Button>
      </div>
      <Typography>{name}</Typography>
      <Typography>{brand}</Typography>
      <Typography>{releaseYear}</Typography>
      <Typography>{rating}</Typography>
      {imageUrl && <Image src={imageUrl} alt={name} width={100} height={100} />}
    </Container>
  );
};

export default ProductPage;

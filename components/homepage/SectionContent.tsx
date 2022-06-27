import { Container, Grid, Typography } from "@mui/material";
import ButtonTransform from "components/ButtonTransform";
import CardContent from "components/CardContent";
import router from "next/router";
import React, { useEffect, useState } from "react";
import { fetchContent } from "utils/api";
import AOS from "aos";

const SectionContent = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data: any = await fetchContent();
      setContents(data);
      return data;
    };
    fetch();
  }, [fetchContent]);

  return (
    <section>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: "2rem", md: "2.5rem" } }}
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Contents
        </Typography>
        <Grid container spacing={3}>
          {contents.map((item: any, index: number) => {
            return (
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <CardContent
                  slug={item.slug}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </Grid>
            );
          })}
        </Grid>
        <ButtonTransform
          title="VIEW ALL CONTENTS"
          onClick={() => router.push("/contents")}
        />
      </Container>
    </section>
  );
};

export default SectionContent;

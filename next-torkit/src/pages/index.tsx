import type { NextPage } from "next";
import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useStyles } from "./Home.style";

const Home: NextPage = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h1">Animation Experiment</Typography>
      <Typography variant="h2">Section 1</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi
        assumenda consectetur, consequatur distinctio exercitationem incidunt
        ipsa itaque minima modi, nisi odio placeat quam quas tempore. Aliquid
        architecto asperiores aspernatur harum, modi nisi porro quidem quo
        tempore voluptas. Aspernatur ea, eveniet maxime nemo nesciunt obcaecati
        quia quisquam repellat similique suscipit.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae
        fuga nemo nobis quaerat. Amet consequatur debitis doloremque eius
        laborum maiores modi rerum sapiente! Ab cupiditate deleniti, earum esse
        explicabo facere ipsam iste itaque magni molestiae nesciunt nobis nulla
        placeat possimus recusandae sint soluta voluptates.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        blanditiis culpa cumque doloremque doloribus esse est et eum facere
        fugit harum ipsam maxime minus optio perferendis provident quae qui quia
        reprehenderit, sapiente ut, veritatis voluptatem. At debitis delectus
        ipsa velit.
      </Typography>
      <Typography variant="h2">Section 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis
        doloribus eum ex labore nemo ratione rerum saepe ut voluptatum? Corporis
        dignissimos iste modi molestias possimus ratione repellat reprehenderit
        unde veritatis vero. Eius, reiciendis tempore?
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
        aspernatur delectus iure molestias officia quaerat recusandae repellat,
        ullam vero! Ab ad adipisci, alias assumenda autem commodi, consectetur
        cumque dolorum facilis, hic incidunt ipsam nihil numquam obcaecati porro
        rem sint temporibus ullam unde voluptatum! Aspernatur cupiditate id
        saepe voluptas! Animi facere labore sunt? Amet, omnis.
      </Typography>
      <Typography variant="h2">Section 3</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa
        ex expedita laudantium quaerat quam quo reprehenderit suscipit totam
        vel. Architecto culpa cupiditate dolorem eius error eveniet facere
        facilis fugiat illum ipsa numquam, obcaecati perspiciatis quaerat quas
        quia repellat reprehenderit sint ullam unde, voluptatem. Aperiam
        consequuntur cumque distinctio dolor dolores doloribus exercitationem
        facilis magni, molestiae optio quasi repudiandae saepe sed?
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        commodi cum dolor ea nesciunt obcaecati quia reiciendis rem repellendus!
        Accusamus ad animi architecto autem beatae culpa, deserunt dignissimos
        dolore dolores expedita illum inventore ipsam laborum libero officiis
        porro quisquam sunt velit veritatis vero vitae, voluptate.
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi atque
        blanditiis dignissimos doloremque dolores, ducimus ea eaque enim eos
        exercitationem facere harum in ipsum necessitatibus nisi nulla,
        perspiciatis quae, quas recusandae reprehenderit rerum sed similique
        sint sit suscipit totam unde ut voluptate voluptatum! Ea itaque minima
        modi necessitatibus nobis praesentium quo rerum voluptas voluptatum!
      </Typography>
    </Paper>
  );
};

export default Home;

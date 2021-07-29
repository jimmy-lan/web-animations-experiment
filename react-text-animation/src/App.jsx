import TextAnimation from "./components/TextAnimation/TextAnimation";
import { useStyles } from "./App.style";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextAnimation content="React" />
    </div>
  );
}

export default App;

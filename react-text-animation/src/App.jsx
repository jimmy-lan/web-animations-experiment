import CharacterAnimation from "./components/CharacterAnimation/CharacterAnimation";
import { useStyles } from "./App.style";
import WordAnimation from "./components/WordAnimation/WordAnimation";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WordAnimation content="I love React" />
    </div>
  );
}

export default App;

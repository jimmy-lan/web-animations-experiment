import CharacterAnimation from "./components/CharacterAnimation/CharacterAnimation";
import { useStyles } from "./App.style";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CharacterAnimation content="React" />
    </div>
  );
}

export default App;

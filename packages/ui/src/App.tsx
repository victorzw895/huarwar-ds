import "#/styles/global.css";
import { ThemeProvider } from "#/styles/ThemeProvider";
import { taTheme } from "#/styles/themes/ta";
import { Grid } from "#/layout/grid";
import { Stack } from "#/layout/stack";

import { Button } from "#/components/button";

// Test your component here
const TestComponent = () => {
  return (
    <Button onClick={() => alert('This is a test component')}>Test Component</Button>
  )
}

function App() {
  return (
    <ThemeProvider brand={taTheme}>
      <h1>Vite + React Playground</h1>
      <div
        style={{
          border: "1px solid #eeeeee",
          borderRadius: "4px",
          padding: "16px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          marginTop: "32px",
        }}
      >
        <p>
          This is a Vite + React app that can be used for testing components
          while in development.{" "}
        </p>
        <p>To import a new component:</p>
        <code>
          import {"{ Button }"} from &quot;#/components/button&quot;
        </code>
        <br/>
        into <code>src/App.tsx</code> and save
      </div>
      <Grid container>
        <Grid xSmall={12}>
          <Stack justifyContent="center" marginY={'space-400'}>
            <TestComponent />
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

export default function User({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>Hallo {name}</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

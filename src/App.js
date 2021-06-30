import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
    </ChakraProvider>
  )
}
export default MyApp;

import NormalMenu from './NormalMenu';
import ResponsiveMenu from './ResponsiveMenu';

export default function Nav() {
    return (
        <>
            {/*One of those, going to be rendered depending on the display condition
                from ChakraUI*/}
            <NormalMenu />
            <ResponsiveMenu />
        </>
    );
}
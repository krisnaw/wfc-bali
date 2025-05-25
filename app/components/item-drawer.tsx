import {Drawer} from "vaul";

export function ItemDrawer() {
    return (
        <Drawer.Root>
            <Drawer.Trigger>Open</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Title>Title</Drawer.Title>
                    <div>
                        Hello
                    </div>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    )
}
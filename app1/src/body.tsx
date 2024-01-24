import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleContainer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="sm">
                <Card>
                    <CardContent>
                        <Typography>
                            <p>


                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas sollicitudin nunc eu ullamcorper. In condimentum lacinia augue, nec sollicitudin est suscipit ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse suscipit facilisis dui at mollis. Proin ultricies arcu non nunc pharetra fringilla. Quisque eu rhoncus dui. Quisque quis felis ac diam tincidunt lobortis a nec tellus. Phasellus eget ullamcorper augue. Suspendisse potenti. Cras egestas bibendum mi, nec fermentum dui euismod vitae. Suspendisse ac suscipit enim, vitae ultrices sapien. Sed ut felis ac eros varius hendrerit. Nam sodales sollicitudin dolor sed tempor.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris dolor, porta ac enim in, efficitur fringilla velit. Maecenas sed lorem nulla. Duis at porta orci. Fusce varius justo sed odio fermentum, a tincidunt orci laoreet. Praesent semper finibus massa, quis efficitur ligula viverra nec. Cras non justo eu nisl finibus varius id sed ex. Curabitur vel commodo ante. Duis ut ex erat. Nunc luctus a ex accumsan condimentum. Nunc hendrerit posuere nunc non sollicitudin. Pellentesque congue erat et nunc hendrerit placerat. Etiam quam mauris, dictum nec ex eu, imperdiet convallis sem. Phasellus et augue eget ex aliquam vulputate vel ac ex. Sed egestas, ante sit amet gravida mattis, lorem tortor tempor odio, in efficitur leo lacus eget leo.

                                Donec efficitur ex eget nisi posuere fermentum. Vivamus leo elit, rhoncus sit amet accumsan eu, tristique sed odio. Duis ac feugiat augue, ac bibendum nisl. Vivamus at metus aliquam tortor efficitur faucibus. Morbi auctor vehicula metus. Nulla eget risus quis sem luctus commodo. Mauris at rutrum nunc. Nulla facilisi. Vestibulum placerat ante vitae mauris dictum, ac vestibulum massa cursus. Duis ex quam, imperdiet sed efficitur sit amet, vestibulum sit amet ipsum. Vestibulum finibus massa sit amet scelerisque ornare. Mauris eget felis urna. Proin hendrerit ante ut neque gravida ullamcorper. In cursus ultricies dapibus. Morbi vel interdum lacus. Curabitur gravida feugiat posuere.

                                Sed ut feugiat nulla, quis tempus quam. Pellentesque in luctus quam. Praesent risus felis, iaculis quis est a, iaculis vehicula eros. Nam efficitur gravida ornare. Curabitur ultricies, dui a pellentesque consequat, dolor neque egestas ante, et ullamcorper augue mauris feugiat ligula. Aliquam ultrices scelerisque facilisis. Nulla ultrices, leo eu ornare accumsan, ipsum est ornare nulla, non maximus sapien nibh et purus. Morbi pharetra in leo non gravida. Duis in lobortis mi. Donec id rutrum erat. Phasellus porttitor sem et euismod gravida. Integer porta diam eu eleifend gravida. Nulla eget turpis quis leo consectetur ornare. Pellentesque non dolor eu risus tincidunt pharetra ut at felis.

                                Sed elit felis, pellentesque non vestibulum nec, consequat non ante. Suspendisse pretium hendrerit purus a blandit. Fusce scelerisque viverra nisi, iaculis rutrum magna congue ac. Nulla cursus gravida sapien at vulputate. Sed mauris dolor, rutrum sed sollicitudin nec, cursus vitae ipsum. Nulla blandit suscipit quam, vel efficitur mi rutrum non. Duis euismod lorem sem, eu maximus quam faucibus vel. Donec eget tortor in neque ullamcorper ornare. Nam et diam vel ipsum consequat condimentum non in libero. Vivamus placerat cursus neque, quis consectetur tellus vestibulum id. Nunc aliquet ut neque id tincidunt. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis efficitur metus non dapibus.
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
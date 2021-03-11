import Typography from '@material-ui/core/Typography';

export default function Title({ children }: any) {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {children}
        </Typography>
    );
}
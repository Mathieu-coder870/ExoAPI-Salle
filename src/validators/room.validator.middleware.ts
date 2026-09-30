
export const validateBody = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const errorDetails = result.error.issues.map(issue => ({
                field: issue.path.join('.'),
                message: issue.message
            }));
            return res.status(400).json({ errors: errorDetails });
        }

        // Replace req.body with the parsed and typed value
        req.body = result.data;
        next();
    };
};
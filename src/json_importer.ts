import { type CanonicalizeContext, type FileImporter } from "sass";

export const JSONImporter: FileImporter = {
    findFileUrl: function (url: string, context: CanonicalizeContext) {
        throw new Error("Function not implemented.");
    }
} 
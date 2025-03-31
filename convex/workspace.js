import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const CreateWorkspace = mutation(
    {
        args: {
            messages: v.any(),
            user: v.id("users")
        },
        handler: async (ctx, args) => {
            const workspacesId = await ctx.db.insert("workspaces", {
                message: args.messages,
                user: args.user
            });
            console.log("cwdsfcwdsfcsdc",workspacesId);
            return workspacesId;
        }
    }
)
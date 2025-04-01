import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const CreateWorkspace = mutation(
    {
        args: {
            messages: v.any(),
            user: v.id("users")
        },
        handler: async (ctx, args) => {
            const workspacesId = await ctx.db.insert("workspace", {
                messages: args.messages,
                user: args.user
            });
            console.log("cwdsfcwdsfcsdc",workspacesId);
            return workspacesId;
        }
    }
)


export const GetWorkspace = query(
    {
        args: {
            workspacesId: v.id("workspace")
        },
        handler: async (ctx, args) => {
            const result = await ctx.db.get(args.workspacesId);
            // console.log(result);
            return result;
        }
    }
)
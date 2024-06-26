import { Context, Schema, Random } from "koishi";
import rd from "./rd";
import rn from "./rn";
import ri from "./ri";

export const name = "dice-roller";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
    ctx.command("rd <diceCmd>", "摇骰子")
        .alias("摇骰子")
        .alias("摇色子")
        .alias("roll")
        .example('rd 2d6: 即摇 2 个 6 面的骰子。')
        .action((_, diceCmd) => rd(diceCmd));
    ctx.command("rn <startNum> <endNum>", "摇随机数")
        .alias("摇随机数")
        .alias("摇数")
        .example('rn 起始数 最大数')
        .action((_, startNum, endNum) => rn(startNum, endNum));
    ctx.command("ri [...items]", "摇物品")
        .alias("摇物品")
        .alias("摇物")
        .example('ri 物品1 物品2 ...')
        .action((_, ...items) => ri(items));
}

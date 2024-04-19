import { Random } from "koishi";

export default function ri(items: string[]): string {
    if (!items || items.length === 0)
        return "物品列表不得为空！\n使用 help ri 来查询如何使用。"
    if (items.length === 1)
        return "物品列表必须大于一个。"

    return "最终结果为 " + items[Math.abs(Random.int(items.length, 0))] + "。";
}

import { Random } from "koishi";

export default function rn(startNum: string, endNum: string): string {
    if (!parseInt(startNum) || !parseInt(endNum))
        return "起始数和结束数只能为数字。";

    const startNumber: number = parseInt(startNum, 10);
    const endNumber: number = parseInt(endNum, 10) + 1;

    if (startNumber > endNumber) return "起始数不得大于结束数。";

    return "最终结果为 " + Math.abs(Random.int(endNumber, startNumber));
}

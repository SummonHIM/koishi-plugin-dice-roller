import { Random } from "koishi";

export default function rd(diceCmd: string): string {
    if (!diceCmd)
        return "请指定骰子参数！\n使用 help rd 来查询如何使用。"

    const aDiceCmd = diceCmd.match(/(\d+)d(\d+)/);
    if (aDiceCmd) {
        const diceNum: number = parseInt(aDiceCmd[1], 10);
        const diceSide: number = parseInt(aDiceCmd[2], 10);

        let result: number[] = [];
        let sumResult: number = 0;
        let strResult: string = "";

        for (let i = 0; i < diceNum; i++)
            result.push(Math.abs(Random.int(diceSide + 1, 1)));

        for (let i = 0; i < diceNum; i++) {
            sumResult += result[i];
            if (diceNum < 15)
                strResult += "- " + (i + 1) + " 号骰摇出了 " + result[i] + "\n";
            else if (i + 1 == diceNum) strResult += result[i];
            else strResult += result[i] + " + ";
        }

        if (diceNum < 15) strResult += "最终摇出了：" + sumResult;
        else strResult += " = " + sumResult;

        return strResult;
    } else return "投骰命令不正确。";
}

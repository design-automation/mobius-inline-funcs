import { strTrim } from "./strTrim";
const str1 = "This\ is a \sentence";
const str2 = "   This used to have whitespace   ";
test('Check strTrim line terminator', () => {
    expect(strTrim(str1)).toStrictEqual("This is a sentence");
});
test('Check strTrim overloaded and white space', () => {
    expect(strTrim([str1, str2])).toStrictEqual(["This is a sentence", "This used to have whitespace"]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyVHJpbS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS9zdHJzL3N0clRyaW0udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXBDLE1BQU0sSUFBSSxHQUFHLHNCQUFzQixDQUFBO0FBQ25DLE1BQU0sSUFBSSxHQUFHLG9DQUFvQyxDQUFBO0FBRWpELElBQUksQ0FBQywrQkFBK0IsRUFBRSxHQUFHLEVBQUU7SUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7QUFDeEcsQ0FBQyxDQUFDLENBQUMifQ==
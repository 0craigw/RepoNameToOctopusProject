import { RepositoryNameToOctopusProject } from "../src/RepositoryNameToOctopusProject";

test("- should be replaced with space", () => {
    let sut: RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
    expect(sut.convert("Minda-Reports")).toBe("Minda Reports");
});

test(". should be replaced with space", () => {
    let sut: RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
    expect(sut.convert("Minda.Reports")).toBe("Minda Reports");
});
import { RepositoryNameToOctopusProject } from "../src/RepositoryNameToOctopusProject";

describe("RepositoryNameToOctopusProject", () => {
    test("Converts '-' to space", () => {
        let sut: RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
        expect(sut.convert("Minda-Reports")).toBe("Minda Reports");
    });

    test("Converts '.' to space", () => {
        let sut: RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
        expect(sut.convert("Minda.Reports")).toBe("Minda Reports");
    });

    test("Converts 'sb-' to 'LIC Services - '", () => {
        let sut: RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
        expect(sut.convert("sb-Reproduction")).toBe("LIC Services - Reproduction");
    });
});

class RepositoryNameToOctopusProject {
    convert(repositoryName : string): string {
        return repositoryName;
    }
}

let helper : RepositoryNameToOctopusProject = new RepositoryNameToOctopusProject();
console.log(helper.convert("Minda Reports"));
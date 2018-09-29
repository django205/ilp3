export interface Issue {
    id: number;
    description: string;
    status: ['open', 'closed', 'in-progress'];
    severity: ['minor', 'major', 'critical'];
    createdDate;
    resolvedDate;
    selected: boolean;
}
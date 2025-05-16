import React from "react";
import {Button} from "~/components/ui/button";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "~/components/ui/table";
import type {CafesModel} from "../../../database/schema";
import {Link} from "react-router";
import {DeleteButton} from "~/routes/manage/delete-button";

interface CafesListProps {
    cafes: CafesModel[]
}

export default function CafesList({cafes}: CafesListProps) {

    if (!cafes || cafes.length === 0) {
        return <div>
            create new one
        </div>;
    }

    return (
        <div className="w-full">
            <Table>
                <TableCaption>List of available cafes</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cafes.map((cafe) => (
                        <TableRow key={cafe.id}>
                            <TableCell className="font-medium">{cafe.name}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" size="sm" className="mr-2">
                                    <Link to={`/manage/${cafe.id}/edit`}>Edit</Link>
                                </Button>
                                <DeleteButton cafeId={cafe.id}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
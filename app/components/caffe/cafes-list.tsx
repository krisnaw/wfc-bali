import React from "react";
import {Button} from "~/components/ui/button";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "~/components/ui/table";
import type {CafesModel} from "../../../database/schema";
import {Link} from "react-router";

interface CafesListProps {
    cafes: CafesModel[]
}

export default function CafesList({ cafes }: CafesListProps) {
  // If no cafes are provided via props, use mock data
  const cafesToDisplay = cafes.length > 0
    ? cafes
    : [
        { id: 1, name: "Seniman Coffee Studio" },
        { id: 2, name: "Folk Pool & Gardens" },
        { id: 3, name: "Tukies Coconut Shop" },
        { id: 4, name: "Crate Cafe" },
        { id: 5, name: "Machinery Cafe" },
      ];

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
          {cafesToDisplay.map((cafe) => (
            <TableRow key={cafe.id}>
              <TableCell className="font-medium">{cafe.name}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" className="mr-2">
                  <Link to={`/manage/${cafe.id}/edit`}>Edit</Link>
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
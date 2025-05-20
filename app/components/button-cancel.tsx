import {Button} from "~/components/ui/button";
import React from "react";
import {useNavigate} from "react-router";

export function ButtonCancel() {
    const navigate = useNavigate();
    return (
        <Button variant="secondary" onClick={() => navigate(-1)} type="button">
            Cancel
        </Button>
    )
}
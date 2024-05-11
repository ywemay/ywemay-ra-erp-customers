import { useRedirect, useTranslate } from "react-admin";
import { Button } from "@mui/material";

export function FilterButton({ resource, filter, label, ...params}) {
  const redirect = useRedirect();
  const t = useTranslate();

  const handleClick = () => {
    redirect(`/orders?filter={\"customer_id\":\"${customer_id}\"}`);
  };

  return <Button 
    color="primary" 
    onClick={handleClick}
    {...params}
    >{t(label)}</Button>
}
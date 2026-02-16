import * as React from "react";
import { Card, CardContent, Typography, Box, Collapse } from "@mui/material";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import {
  useTreeItem,
  TreeItemContent,
  TreeItemRoot,
  TreeItemIconContainer,
  TreeItemLabel,
  TreeItemIcon,
  TreeItemProvider,
} from "@mui/x-tree-view";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ITEMS = [
  {
    id: "1",
    label: "Website",
    children: [
      { id: "1.1", label: "Home", color: "green" },
      { id: "1.2", label: "Pricing", color: "green" },
      { id: "1.3", label: "About us", color: "green" },
      {
        id: "1.4",
        label: "Blog",
        children: [
          { id: "1.4.1", label: "Announcements", color: "blue" },
          { id: "1.4.2", label: "April lookahead", color: "blue" },
          { id: "1.4.3", label: "What's new", color: "blue" },
          { id: "1.4.4", label: "Meet the team", color: "blue" },
        ],
      },
    ],
  },
  { id: "2", label: "Store" },
  { id: "3", label: "Contact", color: "blue" },
  { id: "4", label: "Help", color: "blue" },
];

function CustomTreeItem(props) {
  const { id, itemId, label, children, ...other } = props;
  const theme = useTheme();

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
    publicAPI,
  } = useTreeItem({ id, itemId, children, label });

  const item = publicAPI.getItem(itemId);
  const color = item?.color;

  return (
    <TreeItemProvider id={id} itemId={itemId}>
      <TreeItemRoot {...getRootProps(other)}>
        <TreeItemContent
          {...getContentProps()}
          sx={{
            borderRadius: 2,
            px: 1.5,
            py: 0.8,
            minHeight: 36,
            "&.Mui-selected": {
              backgroundColor: theme.palette.action.selected,
            },
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        >
          {status.expandable ? (
            <TreeItemIconContainer
              {...getIconContainerProps()}
              sx={{ width: 24 }}
            >
              <TreeItemIcon
                slots={{
                  expandIcon: KeyboardArrowRightIcon,
                  collapseIcon: KeyboardArrowDownIcon,
                }}
                status={status}
              />
            </TreeItemIconContainer>
          ) : (
            <Box sx={{ width: 24 }} />
          )}

          <TreeItemLabel
            {...getLabelProps()}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              fontSize: 14,
            }}
          >
            {color && (
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor:
                    color === "green"
                      ? theme.palette.success.main
                      : theme.palette.primary.main,
                }}
              />
            )}
            {label}
          </TreeItemLabel>
        </TreeItemContent>

        {children && (
          <Collapse in={status.expanded} timeout="auto" unmountOnExit>
            <Box sx={{ pl: 3 }}>{children}</Box>
          </Collapse>
        )}
      </TreeItemRoot>
    </TreeItemProvider>
  );
}

export default function CustomizedTreeView() {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3 }}>
      <CardContent>
        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Product tree
        </Typography>

        <RichTreeView
          items={ITEMS}
          defaultExpandedItems={["1"]}
          defaultSelectedItems={["1.3"]}
          slots={{ item: CustomTreeItem }}
        />
      </CardContent>
    </Card>
  );
}

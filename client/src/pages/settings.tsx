import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/lib/theme-provider";
import { db } from "@/lib/db";
import { useToast } from "@/hooks/use-toast";
import { Download, Upload, Moon, Sun, Cloud } from "lucide-react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

  const handleExportCSV = async () => {
    setIsExporting(true);
    try {
      const transactions = await db.transactions.toArray();
      const csv = [
        "Date,Type,Amount,Category,Description",
        ...transactions.map(
          (t) =>
            `${t.date},${t.type},${t.amount},${t.category},"${t.description}"`
        ),
      ].join("\n");

      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `budget-export-${new Date().toISOString().split("T")[0]}.csv`;
      a.click();
      URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Data exported to CSV",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export data",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  const handleBackupToGoogleDrive = () => {
    toast({
      title: "Coming Soon",
      description: "Google Drive backup will be available in the full version",
    });
  };

  const handleRestoreFromGoogleDrive = () => {
    toast({
      title: "Coming Soon",
      description: "Google Drive restore will be available in the full version",
    });
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your preferences and data
        </p>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-semibold">Theme</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Choose your preferred color scheme
            </p>
            <div className="flex gap-3">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                onClick={() => setTheme("light")}
                className="flex-1"
                data-testid="button-theme-light"
              >
                <Sun className="w-4 h-4 mr-2" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                onClick={() => setTheme("dark")}
                className="flex-1"
                data-testid="button-theme-dark"
              >
                <Moon className="w-4 h-4 mr-2" />
                Dark
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-semibold">Google Drive Backup</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Backup and restore your data securely
            </p>
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                onClick={handleBackupToGoogleDrive}
                data-testid="button-backup-drive"
              >
                <Cloud className="w-4 h-4 mr-2" />
                Backup to Google Drive
              </Button>
              <Button
                variant="outline"
                onClick={handleRestoreFromGoogleDrive}
                data-testid="button-restore-drive"
              >
                <Upload className="w-4 h-4 mr-2" />
                Restore from Google Drive
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <Label className="text-lg font-semibold">Export Data</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Download your transactions as CSV
            </p>
            <Button
              onClick={handleExportCSV}
              disabled={isExporting}
              data-testid="button-export-csv"
            >
              <Download className="w-4 h-4 mr-2" />
              {isExporting ? "Exporting..." : "Export to CSV"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

---
layout: docs
category: Windows
title: Debug Symbol
slug: en.Symbol
icon: icon-windows.svg
order: null
---
# Debug Symbol
[Debug symbol](https://en.wikipedia.org/wiki/Debug_symbol) contains source code information of its binary file (such as executable, library, etc.) that can help navigate inside without needing original script used to compile. Although symbols cannot present full source code from the binary, it can provide identifiers and its address (i.e., location on memroy) of variables and functions.

> Here, binary files such as `.EXE` and `.DLL` extension files are referred to as "module" in this document.

## Windows Symbols
Microsoft Windows NT also has several levels of symbols available for use. Below is a list of information provided based on the level of symbols.

<table>
  <thead>
    <tr>
      <th style="text-align: center">Symbol</th>
      <th>Observable Data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">Export</td>
      <td>
        <ul>
          <li>Function (from export table)</li>
        </ul>
        <span>Server: N/A</span>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">Public</td>
      <td>
        <ul>
          <li>Function (non-static)</li>
          <li>Global variables (specified as external)</li>
        </ul>
        <span>Server: </span><code>https://msdl.microsoft.com/download/symbols</code>
      </td>
    </tr>
    <tr>
      <td style="text-align: center">Private</td>
      <td>
        <ul>
          <li>Function</li>
          <li>Global variables</li>
          <li>Local variables</li>
          <li>User-defined structures, classes, and data types</li>
          <li>Source file information: file name, line number, etc.</li>
        </ul>
        <span>Server: N/A</span>
      </td>
    </tr>
  </tbody>
</table>

## Program Database
[Program database](https://en.wikipedia.org/wiki/Program_database), aka. `.PDB` extension file is a Microsoft format that contains debugging information about its module, including symbols. It is created as a separate file during compilation, since it can take up significant space. Therefore, such file may be needed if further analysis involving custom application is inevitable.

# Configuration
Designating symbol path is crucial when debugging application, both user-mode and kernel-mode. It allows debugger to locate necessary symbols for navigating module internally.

* Caching symbols locally is recommended for faster debugging performance.

    | Syntax | Description |
    |--------|-------------|
    | `cache*;` | Cache the loaded symbol to the default local cache directory from the path on the right-side of its semicolon. |
    | `cache*C:\Symbols;` | Cache the loaded symbol to the `C:\Symbols` directory from the paath on the right-side of its semicolon. |

* Symbol can be loaded from server via the internet or a corporate network.

    | Syntax | Description |
    |--------|-------------|
    | `srv*` | Acquire symbols from the default symbol server. |
    | `srv*https://symbol.server.com` | Acquire symbols from the `https://symbol.server.com` server. |
    | `srv*C:\Symbols*https://symbol.server.com` | Acquire symbols from the `https://symbol.server.com` server, and cache them to the `C:\Symbols` directory. |

* Environment variable `_NT_SYMBOL_PATH` is useful for applying a single symbol path to every debugger symbol configuration (advise to add this as system variable).

    ![Example of environment variable on <code>_NT_SYMBOL_PATH</code>](/images/docs/windbg/windbg_setting_symbol.png)

# Verification
Loading a different symbol not generated upon the build may cause missing routines within its call stack, which is also known as "mismatched." Even the correct symbol can become corrupted while downloading from the symbol server. Thus, symbol verification is used to check whether the symbol corresponds to the build and is in perfect shape.

This process is automatically handled by the debugger, most notably [WinDbg](en.WinDbg).

# See Also
* [Public and Private Symbols](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/public-and-private-symbols)
* [Symbol path for Windows Debugger](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/symbol-path)
* [Protable PDB Symbols](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/symbols-portable-pdb)
